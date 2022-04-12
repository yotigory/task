import { Container, Row, Col,} from 'reactstrap';
import {
  ContentHeader,
  ContentCardColumn,
  ContentCard,
  Button,
} from '@galaxy/shifter';
import titleimg from '../img/guide-banner.png';
import bgimg from '../img/bg.png';
import { Header } from '../component/header';
import { Footer } from '../component/footer';
import { FaComment } from 'react-icons/fa';

export const Guide = () => {
  return (
    <>
      <Header></Header>
      <Container className="themed-container mt-3 mb-7">
        <ContentHeader
          alt="Test Page Title"
          height="180"
          href="#"
          src={titleimg}
          title="Guide これはテストページです。"
          width="1134"
        />
        <ContentCardColumn column={3} title="">
          <ContentCard
            href="/set/"
            linkText="Settings Page"
            title="Settings Page"
          ></ContentCard>
          <ContentCard
            href="=/list/"
            linkText="List Page"
            title="List Page"
          >
            Get the most from your Jamstack WordPress site
          </ContentCard>
          <ContentCard
            href="/"
            linkText="Log Out"
            title="Log Out"
          >
            Get the most from your Jamstack WordPress site
          </ContentCard>
        </ContentCardColumn>

        <h3 className="mt-5 mb-3 popular-title">Popular articles</h3>
        <div className="row popular-articles">
          <div className="col-md-4 mb-4">
            <div className="shadow-sm popular-item">
              <ContentCard
                categories={[
                  {
                    link: '',
                    name: 'Developers',
                  },
                  {
                    name: 'Domain',
                  },
                ]}
                href="#"
                linkText="Read this article"
                title="Custom domains on AAAA"
              >
                This article contains step by step guide for adding and
                assigning your custom domain to your test site.
              </ContentCard>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="shadow-sm popular-item">
              <ContentCard
                categories={[
                  {
                    link: '',
                    name: 'Developers',
                  },
                  {
                    name: 'Domain',
                  },
                ]}
                href="#"
                linkText="Read this article"
                title="Custom domains on AAAA"
              >
                This article contains step by step guide for adding and
                assigning your custom domain to your test site.
              </ContentCard>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="shadow-sm popular-item">
              <ContentCard
                categories={[
                  {
                    link: '',
                    name: 'Developers',
                  },
                  {
                    name: 'Domain',
                  },
                ]}
                href="#"
                linkText="Read this article"
                title="Custom domains on AAAA"
              >
                This article contains step by step guide for adding and
                assigning your custom domain to your test site.
              </ContentCard>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="shadow-sm popular-item">
              <ContentCard
                categories={[
                  {
                    link: '',
                    name: 'Developers',
                  },
                  {
                    name: 'Domain',
                  },
                ]}
                href="#"
                linkText="Read this article"
                title="Custom domains on AAAA"
              >
                This article contains step by step guide for adding and
                assigning your custom domain to your test site.
              </ContentCard>
            </div>
          </div>
					<div className="col-md-4 mb-4 d-flex align-items-center" style={{ backgroundImage: `url(${bgimg})` }}>
	            <div className="popular-item popular-questions">
              <h3 className="mb-2 guide-list-title font-weight-bold">
                Questions?
              </h3>
              <p className="mb-4 guide-list-excerpt">
                Our team is happy to help
              </p>
              <Button bordered outline smaller>
                Contact Support <FaComment />
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
};
