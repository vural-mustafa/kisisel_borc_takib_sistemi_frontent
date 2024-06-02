import Image from "next/image";
import Link from "next/link";

export default ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
        <section>
          <header>
            <Image 
               src="/finance.png" // Resmin dosya yolunu belirtin
               alt="Borc Plani"
               width="120"
               height="120"
            />
          </header>
          <nav>
            <ul>
              <li><Link href={'/'}>Anasayfa</Link></li>
              <li><Link href={'/debts'}>Borc Durumu</Link></li>
              <li><Link href={'/payments'}>Ödeme Plani</Link></li>
            </ul>
          </nav>
        </section>
      {children}
    </>
  );
};
