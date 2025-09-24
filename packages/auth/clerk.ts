import { auth } from '@clerk/nextjs/server'

import { env } from "./env.mjs";

// 개발 모드 체크
const isDev = process.env.NODE_ENV === 'development' || process.env.IS_DEBUG === 'true';

export async function getSessionUser() {
  // 개발 모드에서는 더미 사용자 반환
  if (isDev) {
    return {
      id: 'dev-user-123',
      name: 'Developer User',
      email: 'dev@kolektt.com',
      isAdmin: true,
    };
  }
  
  const { sessionClaims } = await auth();
  if (env.ADMIN_EMAIL) {
    const adminEmails = env.ADMIN_EMAIL.split(",");
    if (sessionClaims?.user?.email) {
      sessionClaims.user.isAdmin = adminEmails.includes(sessionClaims?.user?.email);
    }
  }
  return sessionClaims?.user;
}
