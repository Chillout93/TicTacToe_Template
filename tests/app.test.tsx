import { shallow } from "enzyme";
import { renderPlayer } from "../src/App";
import * as Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";

configure({ adapter: new Adapter() });

test('renderPlayer_WithXValue_ReturnsHelloPlayerX', () => {
    const result = shallow(renderPlayer("X"));
    expect(result.text()).toBe("Hello Player X!");
});