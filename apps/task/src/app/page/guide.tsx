import { Container, Row, Col, Button } from 'reactstrap';
import {
  ContentHeader,
  ContentCardColumn,
  ContentCard,
  AuthFormHeader,
  ImageShifterLogo,
  Checkbox,
} from '@galaxy/shifter';
import logo from '../img/guide-banner.png';
import { Header } from '../component/header';
import { Footer } from '../component/footer';

export const Guide = () => {
	let footerBottomOn:boolean = false;
  return (
    <>
      <Header></Header>
      <Container className="themed-container mt-3 mb-7">
        <ContentHeader
          alt="Introducing PHP Error Logs"
          height="180"
          href="#"
          src={logo}
          title="Guides"
          width="1134"
        />
        <ContentCardColumn column={3} title="">
          <ContentCard
            href="https://getshifter.io"
            linkText="Explore Shifter docs"
            title="Explore Shifter docs"
          ></ContentCard>
          <ContentCard
            href="https://getshifter.io"
            linkText="Explore Shifter docs"
            title="Start Watching"
          >
            Get the most from your Jamstack WordPress site
          </ContentCard>
          <ContentCard
            href="https://getshifter.io"
            linkText="Explore extensions"
            title="Explore Jamstack extensions"
          >
            Get the most from your Jamstack WordPress site
          </ContentCard>
        </ContentCardColumn>
				<div className="mt-5 mb-3">
        <ContentCardColumn column={3} title="Popular articles">
          <ContentCard
            categories={[
              {
                name: 'Developers',
              },
              {
                name: 'Domain',
              },
            ]}
            href="https://getshifter.io"
            linkText="Read this article"
            title="Custom domains on Shifter"
          >
            This article contains step by step guide for adding and assigning your custom domain to your Shifter site.
          </ContentCard>
          <ContentCard
            categories={[
              {
                name: 'Developers',
              },
              {
                name: 'Domain',
              },
            ]}
            href="https://getshifter.io"
            linkText="Read this article"
            title="Custom domains on Shifter"
          >
            This article contains step by step guide for adding and assigning your custom domain to your Shifter site.
          </ContentCard>
          <ContentCard
            categories={[
              {
                name: 'Developers',
              },
              {
                name: 'Domain',
              },
            ]}
            href="https://getshifter.io"
            linkText="Read this article"
            title="Custom domains on Shifter"
          >
            This article contains step by step guide for adding and assigning your custom domain to your Shifter site.
          </ContentCard>
          <ContentCard
            categories={[
              {
                name: 'Developers',
              },
              {
                name: 'Domain',
              },
            ]}
            href="https://getshifter.io"
            linkText="Read this article"
            title="Custom domains on Shifter"
          >
            This article contains step by step guide for adding and assigning your custom domain to your Shifter site.
          </ContentCard>
          <ContentCard
            categories={[
              {
                name: 'Developers',
              },
              {
                name: 'Domain',
              },
            ]}
            href="https://getshifter.io"
            linkText="Read this article"
            title="Read the docs"
          >
            content
          </ContentCard>
					</ContentCardColumn>
					</div>
      </Container>
			<Footer></Footer>
    </>
  );
};
