/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.21
 * Generated at: 2013-12-10 15:14:16 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.io.InputStream;
import java.util.Properties;

public final class about_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("<!DOCTYPE html>\n");
      out.write("\n");
      out.write("\n");


InputStream in = this.getClass().getResourceAsStream("/about.properties");

Properties p = new Properties();
if (in != null)
{
    p.load(in);
}

String description  = "";
String notice       = "";
String image        = "./images/brand-logo.png";
String version      = "${project.version}";
String buildNumber  = "${buildNumber}";
String buildDate    = "${buildDate}";
String javaVersion  = "${java.version}";
String computerName = "${env.COMPUTERNAME}";
String buildOSInfo  = "${os.name} ${os.version} ${os.arch}";

if (p != null)
{
    description     = p.getProperty("projectDescripton",description);
    notice          = p.getProperty("projectNotice",    notice);
    version         = p.getProperty("projectVersion",   version);   
    buildNumber     = p.getProperty("buildNumber",      buildNumber);
    buildDate       = p.getProperty("buildDate",        buildDate);
    javaVersion     = p.getProperty("javaVersion",      javaVersion);
    computerName    = p.getProperty("computerName",     computerName);
    buildOSInfo     = p.getProperty("buildOSInfo",      buildOSInfo);
}

//-------------------------------------------------------------------------

      out.write("\n");
      out.write("<img src=\"");
      out.print( image );
      out.write("\" class=\"aboutImage\"/>\n");
      out.write("<p>");
      out.print( description );
      out.write("</p>\n");
      out.write("<p>");
      out.print( notice );
      out.write("</p>\n");
      out.write("<p id=\"aboutInfo\">Version: ");
      out.print( version );
      out.write(" Build Date: ");
      out.print( buildDate );
      out.write(" Build Number: ");
      out.print( buildNumber );
      out.write("</p>\n");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try { out.clearBuffer(); } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
