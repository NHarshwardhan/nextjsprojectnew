import { cookies } from 'next/headers';

export default async function Dashboard() {
  const token = cookies().get('token')?.value;

  if (!token) {
    return <p>Unauthorized. No token found.</p>;
  }

  const res = await fetch(`http://nextjsprojectnew-j3vm-b3tkhbun8-nharshwardhans-projects.vercel.app/api/profile`, {
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
      <h1 >Welcome, {user ?user.name: 'Default'} </h1>
      <p>Email: {user?user.email: 'default'}</p>
    </div>
  );
}
