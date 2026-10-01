export const env = {
  apiBaseUrl: process.env.EXPO_PUBLIC_API_BASE_URL,
  google: {
    iosClientId: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
    androidClientId: process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID,
    webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
  },
  kakao: {
    restApiKey: process.env.EXPO_PUBLIC_KAKAO_REST_API_KEY,
  },
} as const;
