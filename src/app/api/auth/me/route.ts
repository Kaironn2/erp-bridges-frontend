import { NextResponse } from 'next/server';
import axios from 'axios';
import { apiRoutes } from '@/config/apiRoutes';

export async function GET(req: Request) {
  try {
    const cookie = req.headers.get('cookie') || '';
    const accessToken = cookie
      .split('; ')
      .find((c) => c.startsWith('access_token='))
      ?.split('=')[1];

    if (!accessToken) {
      return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
    }

    const res = await axios.get(apiRoutes.auth.me, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return NextResponse.json(res.data);
  } catch (err: any) {
    const status = err.response?.status || 500;
    const message = err.response?.data?.detail || 'Erro ao buscar usuário';
    return NextResponse.json({ error: message }, { status });
  }
}
