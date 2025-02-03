import { Detail } from './Detail';
import { Header } from './Header';
import { Header2 } from './Header2';
import { Item } from './Item';

function Home() {
  return (
    <>
      <Header />
      <Header2 />
      <Item/>
      <Detail/>
    </>
  );
}

export { Home };
