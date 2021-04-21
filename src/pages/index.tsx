import ReactMarkdown from 'react-markdown';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';

export default function Home() {
  const markdown = "#aaa"
  return (
    <div >
      <Header />
      <div className="content">
        <ReactMarkdown source={markdown} />
        <ReactMarkdown source={markdown} />
      </div>
      <Footer />
    </div>
  )
}
