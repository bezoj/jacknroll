import { Header } from "./components/page-sections/Header";
import { Text } from "./components/typography";

function App() {
  return (
    <div className="bg-secondary">
      <Header />
      <Text textVariant="caption">Jack n roll skupina</Text>
      <Text textVariant="body">Jack n roll skupina</Text>
      <Text textVariant="subtitle">Jack n roll skupina</Text>
      <Text textVariant="title">Jack n roll skupina</Text>
    </div>
  );
}

export default App;
