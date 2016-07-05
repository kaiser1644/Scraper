package core;

import java.io.IOException;

import org.junit.Test;

public class HTMLEngineTest {

	@Test
	public void testParseOneThread() throws Exception {
		HTMLEngine engine = new HTMLEngine(new FileManager());
		try {
			engine.parseOneThread("/showtopic.aspx?topicid=2035831&forumpage=1");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
			
	}

	@Test
	public void testParseOneForum() throws Exception {
		throw new RuntimeException("not yet implemented");
	}

}
