import { cookies } from 'next/headers';

export default async function Dashboard() {
  const token = cookies().get('token')?.value;

  if (!token) {
    return <p>Unauthorized. No token found.</p>;
  }

  const res = await fetch(`http://nextjsprojectnew-j3vm-b3tkhbun8-nharshwardhans-projects.vercel.app/api/profile`, {
    headers: {
      Cookie: `token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJqb2huQGdtYWlsLmNvbSIsImlhdCI6MTc1MjY1Njc0NCwiZXhwIjoxNzUyNjYwMzQ0fQ.FW3GpJsdv_3Av2OpnBvzeXvxb40ubcmKA93BxfZY_-c;`,
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
