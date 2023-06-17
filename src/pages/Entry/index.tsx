import { container } from './styles.css';
import MyComponent from '../components/MyComponent';

export default function Entry() {
  return (
    <div className={container}>
      This is entry
      <MyComponent />
    </div>
  );
}
