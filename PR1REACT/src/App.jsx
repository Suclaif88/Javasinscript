import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((count + 1) % objects.length);
  };
  
  const resta = () => {
    setCount((count - 1 + objects.length) % objects.length);
  };
  

  const resetCount = () => {
    setCount(0);
  };

  const objects = [
    {
      titulo: 'Título 1',
      imagen: 'https://via.placeholder.com/150/0000FF/808080?Text=Digital.com',
      parrafo: "HOLA SOY EL 1"
    },
    {
      titulo: 'Título 2',
      imagen: 'https://via.placeholder.com/150/FF0000/FFFFFF?Text=Down.com',
      parrafo: "HOLA SOY EL 2"
    },
    {
      titulo: 'Título 3',
      imagen: 'https://via.placeholder.com/150/FFFF00/000000?Text=WebsiteBuilders.com',
      parrafo: "HOLA SOY EL 3"
    },
    {
      titulo: 'Título 4',
      imagen: 'https://via.placeholder.com/150/00FF00/000000?Text=SEO.com',
      parrafo: "HOLA SOY EL 4"
    },
    {
      titulo: 'Título 5',
      imagen: 'https://via.placeholder.com/150/0000FF/FFFFFF?Text=Dummy.com',
      parrafo: "HOLA SOY EL 5"
    },
    {
      titulo: 'Título 6',
      imagen: 'https://via.placeholder.com/150/FF00FF/FFFFFF?Text=Example.com',
      parrafo: "HOLA SOY EL 6"
    },
    {
      titulo: 'Título 7',
      imagen: 'https://via.placeholder.com/150/00FFFF/000000?Text=Placeholder.com',
      parrafo: "HOLA SOY EL 7"
    },
    {
      titulo: 'Título 8',
      imagen: 'https://via.placeholder.com/150/FF4500/FFFFFF?Text=Images.com',
      parrafo: "HOLA SOY EL 8"
    },
    {
      titulo: 'Título 9',
      imagen: 'https://via.placeholder.com/150/8A2BE2/FFFFFF?Text=Colors.com',
      parrafo: "HOLA SOY EL 9"
    },
    {
      titulo: 'Título 10',
      imagen: 'https://via.placeholder.com/150/FF69B4/FFFFFF?Text=Pink.com',
      parrafo: "HOLA SOY EL 10"
    }
  ];

  return (
    <>
      {/* <div>
        <h1>Contador: {count}</h1>
      </div> */}

      <div className="carousel">
        <h2>{objects[count].titulo}</h2>
        <img src={objects[count].imagen} alt={objects[count].titulo} />
        <p>{objects[count].parrafo}</p>
      </div>
      <div className="botones">
        <button onClick={resta}>Decrementar</button>
        <button onClick={resetCount}>Resetear</button>
        <button onClick={add}>Incrementar</button>
        
      </div>
    </>
  );
}

export default App;


// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   const decrementCount = () => {
//     setCount(count - 1);
//   };

//   const resetCount = () => {
//     setCount(0);
//   };

//   const objects = [
//     {
//       titulo: 'Título 1',
//       imagen: <img src="https://steamuserimages-a.akamaihd.net/ugc/923686272221748895/6F84874499907AB0D1C76F22301A0E5CD4E89E57/?imw=637&amp;imh=358&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true"/>,
//       parrafo: "HOLA SOY EL 1"
//     },
//     {
//       titulo: 'Título 2',
//       imagen: <img id="dimg_383" src="data:image/jpeg;base64,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"/>,
//       parrafo: "HOLA SOY EL 2"
//     },
//     {
//       titulo: 'Título 3',
//       imagen: <img src="https://i.pinimg.com/originals/67/7a/ee/677aeef00591cb8ae1e70fab073dcd1e.jpg"/>,
//       parrafo: "HOLA SOY EL 3"
//     },
//     {
//       titulo: 'Título 4',
//       imagen: <img src="https://steamuserimages-a.akamaihd.net/ugc/923686272221748895/6F84874499907AB0D1C76F22301A0E5CD4E89E57/?imw=637&amp;imh=358&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true"/>,
//       parrafo: "HOLA SOY EL 4"
//     },
//     {
//       titulo: 'Título 5',
//       imagen: <img id="dimg_383" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRIWFxUVFxgWFhUVFhgVFxgYFxcXFRgYHSggGRolGxcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGC8fHyUvLS0tLSstLS0rLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS03LS0rLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAwECBAUGBwj/xABIEAABAwICBgYGBgYIBwAAAAABAAIDBBEhMQUGEkFRYQcTInGBsTJScpGhwRQjNEJi8CQzgpKi4RdTc7LCw9HSFkNEVJOz8f/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAnEQADAAEEAgICAQUAAAAAAAAAAQIRAwQhMRJBBSITUTIUI0KR0f/aAAwDAQACEQMRAD8A8NREQBERAEREAVQqKoQGRGMFerY8gr1dEFEVUUgKiqgUYBaQtpqtW9VUsubNd2D45X8Vrg0nAC55Yrf6L1PqJbOcREM8Td+GXZGAPeVndzK+zLTLfR6RSiziFnMGfJYMFK7C7jcAC9gMlM6kJ+8fevPvdwnxydSh4FQdyiD7ZBZAossLhTfQWnci3afoeGPZiwsIzCpUsydbiPf/ADWa2htvPvUUtM7La96lbmSHBDEzJSgYq0B4NiL93DxVWvBOHDn81vOpNdMo5aLSFYWqZwVhC0KGO5qsLVkFRvQGO9q8z16H6UfYYvTnrzLX37WfYZ5K09kUc4iIrlAiIgCIiAIiIAiIgCIiAIiIAqhUVQgMqLIK5UjyCvAWhBRWuKvKMic8hrW7TjgAEfAwWj8/yXSaK1Qmks6TsNzx9Ij5LpdXNXBCAXAGQ2JJGI5A7gurgphmTgvL19/h4g6J0vbNBovVtkVthgv6xJJ966CGisFlRNHDsrLZGvKvWq3ydCwujDbBZShnJZQA3uHvVLAbwoxQI4wOCv2Fdtt4hXgjiFbLRGCEtVrmY5KctVdhQqZJhSxjgsaSlBGIWze3BW7OC0msEGjkLo/SuWHC+9vfxCvwOIxC2M0QO5aqWIwuFv1biR7LjjfuPn3rv0NznhmVx7RcQonsWSRhgoZAV2mRjFi8y1/H6WfYZ5L1Ky8t6QvtZ9hnkrT2RRzSIiuUCIiAIiIAiIgCIiAIiIAiIgCIqoDMiyCuVsOQUgbfLNaeiCkUTnEBoLnHIAXJ7l2eq2jXQgukZ2yeBOy23Hditrqvq8yNm0bl5sSeGHojkuqZT2sNy8rc7vP0R0RGOWQ0kzbXJC2VNG5+DWn5DmVpDX9bVNo6QDrbEzSWDhCwbwDgZDkL3AJGBXaWbE0MZfDC5JLvEnEnmVzxtG+aNFWTGZRtYO267uAVwDb9lg8cd6iL8ey1z3cG2+LjYDxKslpKh+BkEQ4RAPkz3ySDZaP2DyK7Z0Zn0XJqyvjgAdNIGAmwA9Jx4MYMXHkFrX6RqpP1FK5jT9+oOwbcerF3X5Gy2WjtEMieXNOy92Dn3MkrhwdLLtEjkLAblmzwOa8EPc5hwIJBsdxGF7K2EvRC75NbRRTNb9bIHv4hoAzyAU2O8D3LOdEo3RKHBbyNZWB4aTG1hcMg4WB5XGS1cOn4w/q52mGQ5B5sxx/A/wBE92a6IxrX6RhD7RGJkjXDFr/RtvJwKo4n2iVl8Fxm7/Pco5JHfcDX8iS0+C1g0bJT4QkiP+qkcZIgN/VP9OIciC3gBmp4qxrrNcDG/wBVwt+64Gzh3FZvQl+hx7MqGoDzaxa/Mtdge8cRzHwV72clE6zxsyY2PZdk5p43zvffmrBVFkggmNi6/VvyD7YkHcHjO2/dywehh5kpSwYD4uqL3YlrnbVvVGy0G3IkE95KkLbjBbOWAcMVp6pnVu2h6BHaHD8Q+fvXRoa/+NGdRnlBzV5V0h/bD7DPJesOC8o6RPth9hnku6TGjmERFcoEREAREQBERAEREAREQBERAFVUVQEBkROwC7jUzQW19c/9gW/iPy/muW1d0Z9IkDCbNGJO/uHNeu6Mpy1oawWHE4rl3Wt4rxReJzyZ7HNaAM3cBmtHrBpWYPZSU4tUTXO1n1UeRcefpW7l0jWMibtPc1oGZcQPiuP0TrJRxyTVksm1LI7ZY1oLyyJuDG4ZE22j3rg0IdZrGf8Aprb9Ha6navx0jCGYvNtp59J7syXHvK3/ANHZYl7u+xOHLBabVrSPX00cwFhJtOA3gE4A87WWDrVpOpjjcYIXOdjiNhwA4kXv8F3wnj7dl0sLg2uk9aaKnbjJHhk1rmud+60kriq3X+ecvFJASGNLnuNjstGbn4hrbcysbVPVP6dGaqqlke9znNtcN2C0kXta37NrWO9dfQ6pQsDWPgp5Qw9kuYCW78NppIF913LeYyVd+jg4azSszmHrCzrOq2QBYkSvDAbAZDF3c0rqJxpWl7burqIxiS2+0BxdgDbuvzsuzg0Uza23AF4yt6LbixI4m2F9wwFrm+wMTbfn5o4RD1Un+zT6E0gKiJsgBbfNp3Hv3rNe1R9U2K4AsCb4Kx06xfBrjyeUCbYriNKa+RskMcEUszsvq24m2drgkjwC6+SUEFpyII9+Ci0dolsIIjAbtYuO88LnfZJXkyaalcnAT9IUjHWkpZWWz2uyRhfItG6xx71vdC6w0tWdkEB5xLHi1+YHzC2mk9XmvkEpAda20ONg5oI/ZcQRvFvVseL09qXG1o6l+LcGNbGQ7O93kG7nDIEAFaPTRVXx2dzLoZ7RdmLfVJGHskn4H4LC0vo36TTPhddsrRtMdiC14xa4bwbhcrojWOso5WQVr7Ru9B5Bdf8ACXA7ssl6FS1XWEHCxFg4cFi14vJOfJHN6saTkmjdHONmphLWyDc4EXZI38LgthVx4FUfR/WiRgG2wujdu2oidoNPs4EeI3qWrNwuHUx5ZRSeODS0vZJj3DtN9nIjwPwIXmPSP9sPsM8ivTZ8HRHeXkeFnA/AFeZ9JI/TT7DPIr0dvWZMtRcnKoiLoMgiIgCIiAIiIAiIgCIiAIiIAqhUVQgPUtQ9FsbTiSw2ni9ythpTWT6OBFGwy1RJ2WDcNzncrLR6rmQUQcw7Tu01rchyv3LpKTRkFOz6RJcyyWuT+skdYHZF8h8AvOen5arzz+kaO1M5NJ/wxU1R6/SFS2OEWJAJ8GtAwB7gSchxWRPRUltinpmsbbZ23t+tcBfdjsXG83dicBZZFTVPmcHPyHosF9lo5DeeLlaAvf2uywk9T/R4m637bxB1mpTmmF0QsNg4D8J5e8LefQ+C4jRNWYHiQC+4ji05hd1TVbJGh7HbTeWYIwII3G4PuXLvdu4t0uj0vjd0tWPFvlGqhoJ4HuMLmEOddzXsNhxI2CDe2CzRVVB3wg+w92H/AJAs5zo/Wx4FY7qlo9Fu0eOJXCra9nreM28tBkkxzkz4Ma0eFwT8VeJHDN7rjifNQkuJsSGnhm790ZeKjmoJHDs7N9xkDnAdzW2CpWrjtkeMSSy1Icb3ueWP8lE9/I+4f6rWT6rSS/ra2o2fViIgaBwGxiR3krWaS6MaSRzXNc9lvSx29vmdrfzWf5Yfsj8yXSN+48bjvB+Sq6qkt2SCOJBPkQtWNSoY2WgnngcMnNlOyT+Jh7LvEKOCOSA2nq6eUesbRSj2rGxPgFZPP8WWWvFPFI2jtLPae0wOHFpsfAG4PvCuZp+Ejt7cZzO2wgeL23Z/EsCm0tBK4sjmjkcMwCAfj6Xgs1kUbsCC0+Fldatrsl6OnSyjndaI6avdFE2S7WvL3ujBOIa5oaHWsPSxxuLDDG43WiqVsVmsLtkDe4uw8SpnUAbiHDwzKhratsLC51uQ9Z24JmreCKUac5OR180tV09WPoz7tkYwujIDg19yATfC7mhu/dzF9bF0hva7YqqZzDvLbtI57D7eauq3l5c5+LnElxO+/wDKwtyC2Wg6tkhbT1LGyNPYjc8AkcIyT8D4Lr19oohU1k8jT3iu2jMptIxVDDJE8ODb2ws5riSSCDiMPNec9Ib9qrvxjjPwXeyaoCCV0tMSwFtjGcWuGIPMEXFl5/r6b1XdHGO4gWxXNt/HP1fB12+DmkRF1GQREQBERAEREAREQBERAEREAVzVaqtQHquomiQ2kbKXHae4FovgCcMB3XUldV9bI533cWMGYDGnC3f6R4lx4BT6tVBFFT2ybG5/7ocfktZSZDwV/jYVatU/RxfJXiEkZkanYFHGp2L3j5+2SN3LstQacdQ5xF9qV/8AeJ/xLjdsAE8AT4ZnyXV6m6dpI4WwPqI2zN9Nr3BtjYbzgcLHNce9f9s9D4tN6jZ1L9HsPH4H5LHq9CNkaW9ZKwH+qf1efMBbGGUOF2kOHFpBHvGCvC8bCXo+hdv9nn8/RRSklwqKtpOJ+tYce8svu+KDoxDTePSNY0+0w/IL0BFLKnA/0ezDLStb/D/qrndHjzg7Sla4e0wfIrvCVa4KML9A8+Z0VUwN31NZJ7UrbfBnNZlP0aaNabuhdIeMksjvhex9y7MhWkqQaeh1bo4TeKmiYcACGNvhztdTVGjozldp/CfkcFlVdXHELyyNjbxe4N81yWmOkaghBtKZXDdGCceBcbBHOSypz0zN0vSyRwyPjftSNaXNDmi2G47NvzxXAVVU6QhznF1wCOABxFtw9yxdNdK8sgLYIWxg5lx2nb7iwwUOjqhskTXNOWHzt8V27KIXrk875G9Sp7JJFARcW3cRh+Ssl4zUJXfc5WGeXFY5Ow0BpMzRdvGSM7Lj6wOT/EZ8wd1l5j0mNtXOt6kfkV22qDvrntvgYzcc2kWPxPvXEdJg/TT/AGcfkV89+JaW5qUe/pW70k2cmiIugsEREAREQBERAEREAREQBERAERVQHsuq8V9HssLnqHj3tctTS8VvtRj+hwewPMrD0lo4wSWAvG49g5mx+4fxDdxHMECfjNaZ1blvs4vkdN1CaLGKVtlDH7lJtAHZxLsLNGJsTYd3ebZr320llnz/AIunhCqkAado4EG/JoF3n90HxIXl1ZUmSR8mI23ufa+W0SQPBdvr7T1MMbA5hDJM3A7hj1fLjztyXAXXl7nXnUf1eUe/sdu9KOe2ZdNpCWM3ZLIw4Yse5n90hbuk1/0nF6NbMR+PZl/9jXLmlS65DuO9p+lzSbc3wv8Aahbf+AtWbD0zVw9KGmd+xKP81ebqignJ6f8A001X/bQe+T/dgoZumWuOUNMOPYlP+aF5sFWyDJ3dR0t6SdgHQs9mEf4y4fDctJpDXjSMvp1k1uDXdUPdEGgrnlQqCCWeskedpznOdxLiTlbM4qIuKoikAra6A0kYn2Nth2BubeNzgO9apdj0a6tmqqBI9t4ISHOvk52bWeRPcOKfk/H9itQrWGbeS97Y4GxvgRyIOIKicvRNM6AinO0QQ/e5uBPfx3LHo9XoY7OIL7ccsPNbL5XTc5fZ572F+XHRrdVtHOja6VzSHSABoI+5ntcto2w/CDvsvN+k37c7+zj8ivbp8rrxLpQN64/2cfkV5unqvV1nTPTUeEKUciiIuwgIiIAiIgCIiAIiIAiIgCIiAKoVFUID27Ud1qKD2PmV1DKUObsvAc05g2I9xXLalECjgOfYHmV1VK5eDuG51G1+zplZnDMd+rcL/XHccffa/wAVs9G6Iih/VsA52F+f53qaNynY5Z3vNe58aplJ22lLykWaQ0fHPG6OVgcxwsQflwPNeGa66jy0Ti9gL6fMO3t5PtlbjkvfWq2WIOBa4Ag4EHEEc1O23daL56L1GT5VIVF6/rb0XNfeWjsx2JMRNmHk047J5Zea8t0loyaneWTxvjeDazha/cciOYJHNe5pa8aizLOdy0YV0VUWpAAVFUIgKKhVxCooBaUCkjiLiA0XJNgBjfkF6Dqn0YzTFslXeKLPY/5rh3fcHfjyCrdzCzTJSyczqfqvLXShrBaMEF8hHZaPmbWw5jivfNE6KjpYWQRCzGDxcd7ncSSp9G6Nip4mxQsDGNyAHxJ3nmVO8LzNbcPUeF0aTOCF7ViTYXWXIsWZYlsmrq6nZBt7ua8c6SL/AE03z2GeRXsdZGCV450kX+mm/qM8iuvafzI1OjlURF6JiEREAREQBERAEREAREQBERAFUKiqEB7NqN9lhv6g8yu0hbYLzPo40kZG9S4ACICxvibk2B4WXobJgvE3UNWzph8GyjKyGOWHE8KeMrhaNDMY5ShY8TsVPtKVJBWyx67R0UzdmWNr28HAEeHArKarkTc9FcHn2l+iqkkuYnPhOeFnN7rFcjX9ElW25ikjkHA3Yfmvb7Koau3S3eoveSjhHzvL0eaSabfR9r2XNPmQo4+j/SR/6Vw73M/3L6Nsmyt/66v0R4I8Do+izSDz2hHGPxPufAAYrp9FdDzBjUVBd+GNuyPecV6pZVUPd2+uCPBGl0JqvSUluoha129x7Tz+0cvCy2papCrCsKqq7ZKRGVY/JSOChlcoSJMaVyxZSpJpFiVMtgrEGv0g8i9l41r1IXVbifVaF6rpWtAuL55LyHWmdr6hzmm4sBfjbNdm0X2yRfRpkRF3mQREQBERAEREAREQBERAEREAVQqKoQHQ6o6R6iZrnGzHDZdjbuPgfNeuaPmvje4XiEIwC7HVHWTq7QzeiTZr7+jkA08ufNcW50vPlG8M9WjkyWc0rQxTi+eC2MdRuXl0jXJs2OU7HLAjIWRG5Z4YZnMVyiY5Sh6s4yVyXhXBWAq5pVpnBBciXS6vggorVcSo3JgFxVhVXOUbnK2CC1xWNLIpJJFhzPUggqHb1o6qpvfHsjNZtfP90f8AzmuU1g0tHEw3NzuG9zuCtEeTwiTmNctLXd1bCQScbZ7NvhfBcTUjHwC2XaeXF5u5x2id91r6wWd7l6mmlPCM7XBjoiLUzCIiAIiIAiIgCIiAIiIAiIgCqqIgNhD6IU1kRZM1XR2Wqes4ZaKc2aB2X/J3+vJd7TVAOINwcQiLz9xCTyXlmXHU2WXTzZIi5ki7NlFKp2vRFZooStKvBREQK3VC5VRSQWbStLkRAWOeoZJERAYU0ywKusDRclEUoHEaf1pbH2GdqQgkgfd3DaK4SqmdIS95u4n8gcAiLviUlwSQgYha/SI7Z7giLaOyl9GIiItTIIiIAiIgCIiA/9k="/>,
//       parrafo: "HOLA SOY EL 5"
//     },
//     {
//       titulo: 'Título 6',
//       imagen: <img src="https://i.pinimg.com/originals/67/7a/ee/677aeef00591cb8ae1e70fab073dcd1e.jpg"/>,
//       parrafo: "HOLA SOY EL 6"
//     },
//     {
//       titulo: 'Título 7',
//       imagen: <img src="https://steamuserimages-a.akamaihd.net/ugc/923686272221748895/6F84874499907AB0D1C76F22301A0E5CD4E89E57/?imw=637&amp;imh=358&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true"/>,
//       parrafo: "HOLA SOY EL 7"
//     },
//     {
//       titulo: 'Título 8',
//       imagen: <img id="dimg_383" src="data:image/jpeg;base64,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"/>,
//       parrafo: "HOLA SOY EL 8"
//     },
//     {
//       titulo: 'Título 9',
//       imagen: <img src="https://i.pinimg.com/originals/67/7a/ee/677aeef00591cb8ae1e70fab073dcd1e.jpg"/>,
//       parrafo: "HOLA SOY EL 9"
//     },
//     {
//       titulo: 'Título 10',
//       imagen: <img src="https://steamuserimages-a.akamaihd.net/ugc/923686272221748895/6F84874499907AB0D1C76F22301A0E5CD4E89E57/?imw=637&amp;imh=358&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true"/>,
//       parrafo: "HOLA SOY EL 10"
//     }
//   ];

//   return (
//     <div className="contenedor">
//       <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="2000">
//         <ol className="carousel-indicators">
//           {objects.map((object, index) => (
//             <li key={index} data-target="#carouselExampleIndicators" data-slide-to={index} className={index === 0 ? 'active' : ''}></li>
//           ))}
//         </ol>

//         <div className="carousel-inner">
//           {objects.map((object, index) => (
//             <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
//               <h5>{object.imagen}</h5>
//               <div className="carousel-caption d-none d-md-block">
//                 <h5>{object.titulo}</h5>
//                 <p>{object.parrafo}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="sr-only">Anterior</span>
//         </a>
//         <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="sr-only">Siguiente</span>
//         </a>
//       </div>
//     </div>
//   );
// }

// export default App;
