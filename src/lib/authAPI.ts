"use server"

import { ILogin } from "types/next-auth"

export async function fetchLogin(data: ILogin) {
  try {
    // Fetch login to Backend
    // and response tokens with open data
    const returnedTokens = {
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVybWFpbDEyMzQ1NjdAZ2dnbWFpbC5jb20iLCJ1aWQiOiI2NWJlODJjNDU5NDA3ZGIwZTViZTJlMjkiLCJzdGF0dXMiOiJQRU5ESU5HIiwicm9sZXMiOlsiQURNSU4iLCJVU0VSIl0sImlhdCI6MTcwNjk4NDcwMSwiZXhwIjoxNzA2OTg0NzIxfQ.2UktwPD81CkILa_YGabM4CH4CpgergRYXTV9cSSeWdg",
      refreshToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVybWFpbDEyMzQ1NjdAZ2dnbWFpbC5jb20iLCJ1aWQiOiI2NWJlODJjNDU5NDA3ZGIwZTViZTJlMjkiLCJzdGF0dXMiOiJQRU5ESU5HIiwicm9sZXMiOlsiQURNSU4iLCJVU0VSIl0sImlhdCI6MTcwNjk4NDcwMSwiZXhwIjoxNzEwNDQwNzAxfQ.akuGUIKX5Fb3XlRx89VK6Ud19S710RuUh9ToUSR1-P4",
    }

    if (returnedTokens) return returnedTokens

    throw new Error("Failed login")
  } catch (e) {
    throw e
  }
}

export async function fetchRegistration(data: ILogin) {
  try {
    // Fetch registration data to Backend
    // and response tokens with open data
    const returnedTokens = {
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVybWFpbDEyMzQ1NjdAZ2dnbWFpbC5jb20iLCJ1aWQiOiI2NWJlODJjNDU5NDA3ZGIwZTViZTJlMjkiLCJzdGF0dXMiOiJQRU5ESU5HIiwicm9sZXMiOlsiVVNFUiJdLCJpYXQiOjE3MDY5ODQxMzIsImV4cCI6MTcwNjk4NDE1Mn0.hkLY-GcCZ6xzkAqHXYVmi-myyW6xPAFTV6XQgdpogNU",
      refreshToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVybWFpbDEyMzQ1NjdAZ2dnbWFpbC5jb20iLCJ1aWQiOiI2NWJlODJjNDU5NDA3ZGIwZTViZTJlMjkiLCJzdGF0dXMiOiJQRU5ESU5HIiwicm9sZXMiOlsiVVNFUiJdLCJpYXQiOjE3MDY5ODQxMzIsImV4cCI6MTcxMDQ0MDEzMn0.yeKevyjAyLxt6k-l-B-SjkaDW1DnL2jUwvSMaX2vxKc",
    }

    if (returnedTokens) return returnedTokens

    throw new Error("Failed login")
  } catch (e) {
    throw e
  }
}
