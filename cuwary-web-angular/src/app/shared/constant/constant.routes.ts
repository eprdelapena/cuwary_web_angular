import E_URL_ROUTES from "../enum/enum.routes";

const CONS_URL_ROUTES: Record<E_URL_ROUTES, string> = {
    [E_URL_ROUTES.LOGIN]: "auth/login",
    [E_URL_ROUTES.REGISTER]: "auth/register",
    [E_URL_ROUTES.FORGOT_PASSWORD]: "auth/forgot-password"
}

export default CONS_URL_ROUTES