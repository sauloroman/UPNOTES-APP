import React from 'react'
import { Link } from 'react-router-dom';
import { SliderAuth } from './components/SliderAuth';
import logo from '../../assets/images/logo.png';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  titleMain: string;
  description: string;
  textNavigation: string;
  textLink: string;
  page: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ 
  children ,
  title,
  titleMain,
  description,
  textNavigation,
  textLink,
  page,
}) => {
  return (
    <div className="auth-layout">
    <div className="auth-layout__container">
      <div className="auth-layout__slider flex flex-column-center">
        <SliderAuth />
      </div>

      <div className="auth-layout__content">
        <div className="flex flex-end u-margin-bottom-medium">
          <img src={logo} alt="UpNotesLogo" className="auth-layout__logo" />
        </div>
        <div className="flex flex-column-center">
          <div className="auth-layout__top">
            <h1 className="heading-primary u-margin-bottom-small u-text-center">
              {title} <span className="heading-primary-span">{titleMain}</span>
            </h1>
            <p className="paragraph u-text-center">{description}</p>
          </div>

          {children}

          <div className="auth-layout__navigate">
            <p className="paragraph">
              {textNavigation}
              <Link to={`/auth/${page}`}>{textLink}</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
