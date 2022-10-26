type AppProps = {
  json: string;
};

const App = (props: AppProps) => {
  const { json } = props;
  return <div>{json}</div>;
};

export default App;
