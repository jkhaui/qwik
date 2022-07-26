import { component$, Host, Slot } from '@builder.io/qwik';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <Host data-test-layout="root">
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </Host>
  );
});
