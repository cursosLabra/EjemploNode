<xsl:stylesheet version="1.0" 
      xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
 <html>
  <body>
   <h1>Pedido</h1>
   <xsl:apply-templates />
   
   <p>Number or 
       products=<xsl:value-of select="count(//producto)" /></p>
  </body>
 </html>
</xsl:template>

<xsl:template match="producto">
 <p><em><xsl:value-of select="nombre" /></em></p>
</xsl:template>
 
</xsl:stylesheet>
