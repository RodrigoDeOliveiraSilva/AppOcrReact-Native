import { NativeBaseProvider, StatusBar } from "native-base" ; 

import { THEME } from './src/styles/theme';
import {AppRoutes} from "../AppOcr/src/routes/app.routes";

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
        />
        <AppRoutes/>
    </NativeBaseProvider>
  );
}

