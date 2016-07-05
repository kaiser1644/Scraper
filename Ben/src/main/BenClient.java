package main;

import java.awt.Font;
import java.io.IOException;
import java.util.HashSet;

import javax.swing.ButtonGroup;
import javax.swing.JCheckBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTable;
import javax.swing.UIManager;
import javax.swing.UnsupportedLookAndFeelException;
import javax.swing.table.DefaultTableModel;

import core.FileManager;
import core.HTMLEngine;

public class BenClient {

	private static final String[] forumIDs = new String[] { 
		"398", // chats
		"225", // fashion
		"347", // beauty
		"341" // fitness
	};
	private final ButtonGroup bgForums = new ButtonGroup();
	private JTable tblKeywords;
	
	public static void main(String[] args) {
		new BenClient();
	}
	
	public BenClient() {
		// set UI style
		try {
			UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
		} catch (ClassNotFoundException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		} catch (InstantiationException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		} catch (IllegalAccessException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		} catch (UnsupportedLookAndFeelException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		
		JFrame mainWindow = new JFrame("Ben");
		mainWindow.setResizable(false);
		mainWindow.setFont(new Font("Arial", Font.PLAIN, 14));
		mainWindow.getContentPane().setLayout(null);
		
		JCheckBox chkChats = new JCheckBox("Chats");
		chkChats.setFont(new Font("Arial", Font.PLAIN, 14));
		bgForums.add(chkChats);
		chkChats.setBounds(26, 68, 97, 23);
		mainWindow.getContentPane().add(chkChats);
		
		JCheckBox chkFitness = new JCheckBox("Fitness");
		chkFitness.setFont(new Font("Arial", Font.PLAIN, 14));
		bgForums.add(chkFitness);
		chkFitness.setBounds(125, 68, 97, 23);
		mainWindow.getContentPane().add(chkFitness);
		
		JCheckBox checkFashion = new JCheckBox("Fashion");
		checkFashion.setFont(new Font("Arial", Font.PLAIN, 14));
		bgForums.add(checkFashion);
		checkFashion.setBounds(241, 68, 97, 23);
		mainWindow.getContentPane().add(checkFashion);
		
		JCheckBox checkBeauty = new JCheckBox("Beauty");
		checkBeauty.setFont(new Font("Arial", Font.PLAIN, 14));
		bgForums.add(checkBeauty);
		checkBeauty.setBounds(363, 68, 97, 23);
		mainWindow.getContentPane().add(checkBeauty);
		
		JLabel lblForums = new JLabel("Select Forums");
		lblForums.setFont(new Font("Arial", Font.PLAIN, 15));
		lblForums.setBounds(26, 24, 105, 37);
		mainWindow.getContentPane().add(lblForums);
		
		JLabel lblKeyWords = new JLabel("Enter Keywords");
		lblKeyWords.setFont(new Font("Arial", Font.PLAIN, 15));
		lblKeyWords.setBounds(26, 144, 105, 37);
		mainWindow.getContentPane().add(lblKeyWords);
		
		tblKeywords = new JTable();
		tblKeywords.setFont(new Font("Arial", Font.PLAIN, 14));
		tblKeywords.setModel(new DefaultTableModel(
			new Object[][] {
			},
			new String[] {
				"Keyword"
			}
		));
		tblKeywords.setCellSelectionEnabled(true);
		tblKeywords.setBounds(79, 265, 1, 1);
		mainWindow.getContentPane().add(tblKeywords);
				
		// start new HTML engine
		HTMLEngine engine = new HTMLEngine(new FileManager());
		
		// key words
		HashSet<String> keyWords = new HashSet<String>();
		keyWords.add("奔");
		keyWords.add("晒");
		engine.setKeyWords(keyWords);
		try {
			engine.parseForums(forumIDs);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
