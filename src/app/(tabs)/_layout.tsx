import { Tabs } from 'expo-router';

import { colors, typography } from '@/styles';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.gray[900],
        tabBarInactiveTintColor: colors.gray[500],
        tabBarLabelStyle: typography.caption1,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />

      <Tabs.Screen
        name="archive"
        options={{
          title: 'Archive',
        }}
      />

      <Tabs.Screen
        name="my"
        options={{
          title: 'My',
        }}
      />
    </Tabs>
  );
}
