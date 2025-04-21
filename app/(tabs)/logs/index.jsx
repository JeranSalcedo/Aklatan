import { View, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';

import { useAuth } from '@/contexts/AuthContext';

import Logs from '@/components/Logs';

const LogsScreen = () => {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();

  const [logs, setLogs] = useState([
    { id: '1', text: 'log_1' },
    { id: '2', text: 'log_2' },
    { id: '3', text: 'log_3' },
  ]);

  useEffect(() => {
    if (!authLoading && !user) {
      router.replace('/auth');
    }
  }, [user, authLoading]);

  return (
    <View style={styles.container}>
      <Logs logs={logs} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default LogsScreen;
