import { NextResponse } from 'next/server';
import axios from 'axios';
import { apiRoutes } from '@/config/apiRoutes';

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const res = await axios.post(apiRoutes.auth.login, body, {
      headers: { 'Content-Type': 'application/json' },
    });

    const data = res.data;

    const response = NextResponse.json({ success: true });
    response.cookies.set({
      name: 'access_token',
      value: data.access,
      httpOnly: true,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });

    return response;
  } catch (err: any) {
    const status = err.response?.status || 500;
    const message = err.response?.data?.detail || 'Erro no login';
    return NextResponse.json({ error: message }, { status });
  }
}
