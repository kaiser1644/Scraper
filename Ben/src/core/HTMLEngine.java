package core;

import java.io.IOException;
import java.util.HashSet;
import java.util.Map;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

public class HTMLEngine {
	// constants
	private static final String USER_AGENT = "Mozilla/5.0";
	private static final String BASE_URL = "http://forums.huaren.us";
	private static final String LOGIN_URL = "http://forums.huaren.us/login.aspx";
	
	private Map<String, String> cookies;
	private FileManager fManager;
	private HashSet<String> keyWords;
		
	public HTMLEngine(FileManager fManager) {
		this.fManager = fManager;
		try {
			login();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void setKeyWords(HashSet<String> keyWords) {
		this.keyWords = keyWords;
	}
	
	public void removeKeyWord(String keyWord) {
		this.keyWords.remove(keyWord);
	}
	
	public void addKeyWord(String keyWord) {
		this.keyWords.add(keyWord);
	}
	
	private void login() throws IOException {
		cookies = Jsoup.connect(LOGIN_URL)
			.data("username", "riceandbeans")
			.data("password", "0401352")
			.data("templateid", "0")
			.data("expires", "43200")
			.userAgent(USER_AGENT)
			.execute().cookies();
	}
	
	public void parseForums(String[] forumIDs) throws IOException {
		for (String forumID : forumIDs) {
			parseOneForum(forumID);
		}
	}
	
	public void parseOneForum(String forumID) throws IOException {
		Document doc = 
				Jsoup.connect("http://forums.huaren.us/showforum.aspx?forumid=" + forumID).userAgent(USER_AGENT).cookies(cookies).get();
		// Find all threads on this forum (first page) and parse them
		Elements titles = doc.getElementById("threadlist").getElementsByClass("subject");
		for (int i = 0; i < titles.size(); i++) {
			Elements link = titles.get(i).getElementsByTag("a");
			String title = link.get(0).html();
			if (!threadFilter(title)) {
				continue;
			}
			String oneThread = link.attr("href");
			parseOneThread(oneThread);
		}
	}
	
	public void parseOneThread(String url) throws IOException {
		url = BASE_URL + url;
		Document doc = Jsoup.connect(url).userAgent(USER_AGENT).cookies(cookies).get();
		Elements messages = doc.select("div[id^=message]");
		Elements photos;
		for (int i = 0; i < messages.size(); i++) {
			photos = messages.get(i).select("img[src^='/attachment']");
			for (int j = 0; j < photos.size(); j++) {
				String imageURL = photos.get(j).attr("src");
				fManager.SaveImage(getImageID(imageURL), 
						Jsoup.connect(BASE_URL + imageURL)
						.userAgent(USER_AGENT)
						.cookies(cookies)
						.ignoreContentType(true).execute().bodyAsBytes());
			}
		}
	}
	
	private String getImageID(String url) {
		return url.split("\\?")[1];
	}
	
	private boolean threadFilter(String title) {
		for (String keyWord : keyWords) {
			if (title.contains(keyWord)) {
				return true;
			}
		}
		return false;
	}

}
