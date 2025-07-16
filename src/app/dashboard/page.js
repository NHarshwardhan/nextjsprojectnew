import { cookies } from 'next/headers';

export default async function Dashboard() {
  const token = cookies().get('token')?.value;

  if (!token) {
    return <p>Unauthorized. No token found.</p>;
  }

  const res = await fetch(`https://nextjsprojectnew-j3vm.vercel.app/api/profile`, {
    headers: {
      Cookie: `token=${token}`,
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    return <p>Invalid token or failed to fetch profile.</p>;
  }

  const user = await res.json();

  return (
    <div>
      <h1 >Welcome, {user.name} </h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
