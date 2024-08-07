import Button from './Button';

interface OAuthProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  logo: React.ReactNode;
}

export default function OAuth({ children, logo, ...props }: OAuthProps) {
  return (
    <Button
      variant="outline"
      className="flex w-full py-2 gap-2 items-center"
      {...props}
    >
      <div className="w-1/5 flex justify-center items-center">{logo}</div>
      <div className="text-sm">{children}</div>
    </Button>
  );
}
