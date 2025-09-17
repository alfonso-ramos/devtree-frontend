export type User = {
    name: string;
    email: string;
    handle: string;
}

export type RegisterForm = Pick<User, 'email' | 'name' | 'handle'> & {
    password: string;
    password_confirmation: string;
}

export type LoginForm = Pick<User, 'email'> & {
    password: string;
}   