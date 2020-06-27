export const basicTable = `
<body>
  <table>
    <thead>
      <tr>
        <th> head1 </th>
        <th>  head<br />2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td> val11   </td>
        <td>  val12</td>
      </tr>
      <tr>
        <td>val21</td>
        <td>va<br />l22</td>
      </tr>
    </tbody>
  </table>
</body>
`;

export const theadWithTd = `
<body>
  <table>
    <thead>
      <tr>
        <td> head1 </td>
        <td>  head<br />2</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td> val11   </td>
        <td>  val12</td>
      </tr>
      <tr>
        <td>val21</td>
        <td>va<br />l22</td>
      </tr>
    </tbody>
  </table>
</body>
`;

export const noTheadWithTh = `
<body>
  <table>
    <tbody>
      <tr>
        <th> head1 </th>
        <th>  head<br />2</th>
      </tr>
      <tr>
        <td> val11   </td>
        <td>  val12</td>
      </tr>
      <tr>
        <td>val21</td>
        <td>va<br />l22</td>
      </tr>
    </tbody>
    </table>
</body>
`;

export const noTheadWithTd = `
<body>
  <table>
    <tbody>
      <tr>
        <td> head1 </td>
        <td>  head<br />2</td>
      </tr>
      <tr>
        <td> val11   </td>
        <td>  val12</td>
      </tr>
      <tr>
        <td>val21</td>
        <td>va<br />l22</td>
      </tr>
    </tbody>
  </table>
</body>
`;

export const invalidTable = `
<body>
  <table>
    <tbody>
    </tbody>
  </table>
</body>
`;
