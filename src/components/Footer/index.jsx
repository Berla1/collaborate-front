const Footer = () => {
  return (
    <footer className="flex text-[#939393] border-[#939393] border-t p-6 ">
      <div>
        <h4>© 2024 Collaborate, Inc.</h4>
      </div>
      <div>
        <ul className="flex gap-8 mx-10">
          <li className="hover:underline hover:cursor-pointer">O que é o Collaborate?</li>
          <li className="hover:underline hover:cursor-pointer">Entre em contato</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
