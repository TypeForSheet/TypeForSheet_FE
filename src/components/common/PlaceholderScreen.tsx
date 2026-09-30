import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors, layout, typography } from '@/styles';

type PlaceholderScreenProps = {
  title: string;
  description?: string;
};

export function PlaceholderScreen({ title, description }: PlaceholderScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        {description ? <Text style={styles.description}>{description}</Text> : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.gray.white,
  },

  container: {
    flex: 1,
    paddingHorizontal: layout.screenPaddingHorizontal,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    ...typography.head1,
    color: colors.gray[900],
    textAlign: 'center',
  },

  description: {
    ...typography.body2,
    marginTop: 12,
    color: colors.gray[500],
    textAlign: 'center',
  },
});
