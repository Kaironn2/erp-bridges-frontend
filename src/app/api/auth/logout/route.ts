import { NextResponse } from 'next/server';
import axios from 'axios';
import { apiRoutes } from '@/config/apiRoutes';

export async function POST() {
  try {
    await axios.post(apiRoutes.auth.logout, {}, { withCredentials: true });

    const response = NextResponse.json({ success: true });
    response.cookies.set({
      name: 'access_token',
      value: '',
      httpOnly: true,
      path: '/',
      maxAge: 0,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });

    return response;
  } catch (err: any) {
    const status = err.response?.status || 500;
    const message = err.response?.data?.detail || 'Erro no logout';
    return NextResponse.json({ error: message }, { status });
  }
}
