import {
  collection,
  getDoc,
  getDocs,
  getFirestore,
  doc,
  query,
  where,
  addDoc,
} from 'firebase/firestore';
import bcrypt from 'bcrypt';
import app from './init';
import { responseStatus } from '@/utils/response';
import { User, UserDocs } from '@/types/lib';

const firestore = getFirestore(app);

function getUserToken(data: UserDocs) {
  return { id: data.id, email: data.email, username: data.username };
}

export async function retrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));

  const data = snapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));

  const data = snapshot.data();

  return data;
}

export async function signUp(userData: {
  email: string;
  password: string;
  username: string;
}) {
  const q = query(
    collection(firestore, 'users'),
    where('email', '==', userData.email),
  );

  const snapshot = await getDocs(q);

  if (!snapshot.empty) {
    return { status: 409, message: 'User already exists' };
  } else {
    try {
      userData.password = await bcrypt.hash(userData.password, 10);

      const user: User = {
        username: userData.username,
        email: userData.email,
        password: userData.password,
        createdAt: new Date(),
        updatedAt: new Date(),
        verified: false,
        avatar: null,
        gender: 'unknown',
        role: 'user',
      };

      await addDoc(collection(firestore, 'users'), user);

      return { status: 201, message: 'User created successfully' };
    } catch (error) {
      return { status: 500, message: 'Something went wrong' };
    }
  }
}

export async function signIn(email: string) {
  try {
    const q = query(
      collection(firestore, 'users'),
      where('email', '==', email),
    );
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      return null;
    }

    const userDoc = snapshot.docs[0];
    const data = userDoc.data() as User;

    const userData: UserDocs = {
      id: userDoc.id,
      ...data,
    };

    if (userData) {
      return userData;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function googleSignIn(data: {
  name: string;
  email: string;
  image: string;
}) {
  const q = query(
    collection(firestore, 'users'),
    where('email', '==', data.email),
  );

  const snapshot = await getDocs(q);
  if (!snapshot.empty) {
    const userDoc = snapshot.docs[0];
    const user = userDoc.data() as User;

    const userData: UserDocs = {
      id: userDoc.id,
      ...user,
    };

    return userData;
  } else {
    try {
      const newUser: User = {
        username: data.name,
        email: data.email,
        password: '',
        createdAt: new Date(),
        updatedAt: new Date(),
        verified: true,
        avatar: data.image,
        gender: 'unknown',
        role: 'user',
      };

      const docRef = await addDoc(collection(firestore, 'users'), newUser);
      return getUserToken({ id: docRef.id, ...newUser });
    } catch (error) {
      console.error('Error adding new user:', error);
      throw new Error('Failed to add new user');
    }
  }
}
