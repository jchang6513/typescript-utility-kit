export type Optional<Type, Keys extends keyof Type> = Omit<Type, Keys> & Partial<Pick<Type, Keys>>;

export type Marked<Type, Keys extends keyof Type> = Omit<Type, Keys> & Required<Pick<Type, Keys>>;

export type NonEmptyArray<T> = [T, ...T[]];

export type Nullable<T> = T | null;

export type Voidable<T> = T | undefined;
