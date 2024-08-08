import type { Response } from '@/types/util';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';

export default function useFetch(
  url: string,
  method: 'get' | 'post' | 'put' | 'delete' | 'patch',
  data?: any,
  options?: AxiosRequestConfig,
) {
  const [response, setResponse] = useState<Response>({
    success: false,
    message: 'No response yet',
    status: 100,
    data: null,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const { data: response } = await axios({
          url,
          method,
          data: method === 'get' || method === 'delete' ? undefined : data,
          ...options,
        });

        return setResponse(response as Response);
      } catch (error) {
        if (error instanceof AxiosError) {
          return setResponse(error.response?.data as Response);
        }

        return setResponse({
          success: false,
          message: 'Internal server error',
          status: 500,
          data: {
            message: 'Something went wrong',
          },
        });
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [data, method, options, url]);

  return { response, loading };
}
