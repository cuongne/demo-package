
import { Header, HeaderMobile } from './components';
import useDeviceDetection from './hooks/useDeviceDetection';

const Spam = () => (
  <span>
    {' '}
    Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusantium natus
    suscipit voluptatibus esse, quo quidem obcaecati fugiat accusamus labore
    eos? Esse vero nulla illo dolor cumque, architecto tenetur voluptatum.
  </span>
);

function App() {
  const deviceDetection = useDeviceDetection();
  return (
    <>
      {deviceDetection === 'Desktop' ? <Header /> : <HeaderMobile />}
      <main>
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
        <Spam />
      </main>
    </>
  );
}

export default App;
