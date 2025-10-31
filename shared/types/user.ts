export interface User {
    id: string;
    firstName?: string;
    lastName?: string;
    email: string;
    contactNo?: string;
    passwordHash: string;
    createdAt: Date;
    updatedAt: Date;
    preferences?: UserPreferences;
} 

export interface UserPreferences {
    currency?: string;
    language?: string;
    timezone?: string;
    dateFormat?: string;
}

export interface CreateUserRequest {
    firstName?: string;
    lastName?: string;
    email: string;
    contactNo?: string;
    password: string;
    preferences?: UserPreferences;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface AuthResponse {
    user: User;
    token: string;
    expiresIn: string;
}
