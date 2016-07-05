package core;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashSet;

import javax.swing.JFileChooser;
import javax.swing.JOptionPane;
public class FileManager {
	private String imageDir;
	private HashSet<String> registry;
	
	public FileManager() {
		registry = new HashSet<String>();
		// Ask for file path
		JOptionPane frame = new JOptionPane();
		JFileChooser fc = new JFileChooser();
		fc.setFileSelectionMode(JFileChooser.DIRECTORIES_ONLY);
		if( fc.showOpenDialog(frame) == JFileChooser.APPROVE_OPTION )
	    {
			imageDir = fc.getSelectedFile().getAbsolutePath();
	    }
	}
	
	public void SaveImage(String id, byte[] data) throws IOException {
		if (!registry.contains(id)) {
			FileOutputStream out = new FileOutputStream(new File(GenerateImageName(id)));
			out.write(data);
			out.close();
			registry.add(id);
		}
	}
	
	private String GenerateImageName(String id) {
		return imageDir + "\\img_" + id + ".jpg";
	}
}
