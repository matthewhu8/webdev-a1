import AccountNavigation from "./Navigation";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="wd-account-screen">
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <AccountNavigation />
            </td>
            <td valign="top">
              {children}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
