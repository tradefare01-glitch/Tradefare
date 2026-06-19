/**
 * Central location for all TypeScript type definitions
 * Organize types by domain/feature
 */

// User Types
export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  createdAt: Date
}

// Marketplace Types
export interface Product {
  id: string
  title: string
  description: string
  price: number
  seller: User
  category: string
  images: string[]
  createdAt: Date
}

export interface Category {
  id: string
  name: string
  icon?: string
}

// Wallet Types
export interface Wallet {
  id: string
  userId: string
  balance: number
  currency: string
  lastUpdated: Date
}

export interface Transaction {
  id: string
  type: 'credit' | 'debit'
  amount: number
  description: string
  timestamp: Date
  status: 'pending' | 'completed' | 'failed'
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Common Types
export interface PaginationParams {
  page: number
  limit: number
  offset: number
}

export interface PageMeta {
  total: number
  page: number
  limit: number
  hasNextPage: boolean
}
