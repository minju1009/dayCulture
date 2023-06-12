import { container } from './styles.css';
import MyComponent from './MyComponent';

export default function Entry() {
  return (
    <div className={container}>
      This is entry
      <MyComponent />
    </div>
  );
}
