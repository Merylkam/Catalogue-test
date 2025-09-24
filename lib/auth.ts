import jwt from 'jsonwebtoken'
const SECRET = process.env.JWT_SECRET || 'dev-secret'

export function signToken(payload: Record<string, any>, opts = {}){
    return jwt.sign(payload, SECRET, { expiresIn: '1h', ...(opts as any) })
}
export function verifyToken(token: string) {
    try {return jwt.verify(token, SECRET) as any }
    catch { return null }
}