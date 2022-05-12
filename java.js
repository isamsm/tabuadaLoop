let x = 1
        document.write("<table border='1' align='center'>")
        do {
            document.write("<tr>") //tr é linha, x
            for (let y = 1; y <=10; y++) { //y sempre reinicia depois do incremento do x
                document.write("<td class='coluna"+y+"'>") //td é coluna, y. nessa linha é definida a classe de coluna + o número dela
                document.write(y + ' * ' + x + ' = ' + (x * y))
                document.write("</td>")
            }

            x++
            document.write("</tr>")
        } while (x<=10) 

        document.write("</table>")
