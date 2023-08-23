import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
import { Button, Typography } from '@mui/material';
import { changeLanguage, lang } from '../../localization';
import { getTranslate } from '../../localization';

const Link = ({ page, selectedPage, setSelectedPage, name }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? 'text-yellow' : ''
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      <Typography className="text-5xl">{name}</Typography>
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const translate = getTranslate();
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreen = useMediaQuery('(min-width: 800px)');
  const navbarBackground = isTopOfPage ? '' : 'bg-red';

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <div>
          <Button
            color={lang === 'fa' ? 'tertiary' : 'inherit'}
            onClick={() => changeLanguage('fa')}
          >
            <Typography
              fontWeight={lang === 'fa' ? 'bold' : 'normal'}
              variant="h3"
            >
              فارسی
            </Typography>
          </Button>
          {'/'}
          <Button
            color={lang === 'en' ? 'tertiary' : 'inherit'}
            onClick={() => changeLanguage('en')}
          >
            <Typography
              fontWeight={lang === 'en' ? 'bold' : 'normal'}
              variant="h3"
            >
              English
            </Typography>
          </Button>
        </div>

        <div>
          <img className="max-w-[100px]" alt="logo" src="./assets/logo4.png" />
        </div>

        {/* DESKTOP NAV */}
        {isAboveSmallScreen ? (
          <div className="flex justify-between gap-10 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              name={translate.home}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Members"
              name={translate.members}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              name={translate.projects}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              name={translate.contactp}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src="../assets/menu-icon.svg" />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isAboveSmallScreen && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[250px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src="../assets/close-icon.svg" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <Link
                page="Home"
                name={translate.home}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Members"
                name={translate.members}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                name={translate.projects}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                name={translate.contactp}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
