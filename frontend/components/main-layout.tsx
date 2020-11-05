import React, { ReactNode, Component } from 'react';
import { Layout } from 'antd';
import Link from 'next/link';
import Head from 'next/head';

const { Footer, Header, Content } = Layout;

type Props = {
  title?: string;
  children: ReactNode;
};

class MainLayout extends Component<Props> {
  render() {
    const { children, title } = this.props;
    return (
      <Layout>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header>
          <nav>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/blog">
              <a style={{marginLeft: '3rem'}}>Blog</a>
            </Link>
          </nav>
        </Header>
        <Content style={{margin: '2rem 4rem'}}>{children}</Content>
        <Footer>
          <hr />
          <span>Site by: Joe</span>
        </Footer>
      </Layout>
    );
  }
}

export default MainLayout;
