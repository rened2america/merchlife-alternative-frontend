export const APP_TITLE = "Merchlife";
export const DATABASE_PREFIX = "acme";
export const EMAIL_SENDER = '"Merchlife" <noreply@merchlife.co>';

export const redirects = {
  toLogin: "/login",
  toSignup: "/signup",
  afterLogin: "/",
  afterLogout: "/",
  toVerify: "/verify-email",
  afterVerify: "/",
} as const;
