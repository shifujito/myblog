import ReactMarkdown from 'react-markdown';
import { Header } from '../components/common/Header';

export default function Home() {
  const markdown = "# aaa\n## bbb\n### ccc";
  return (
    <div>
      <Header />
      <ReactMarkdown source={markdown} />
    </div>
  )
}
