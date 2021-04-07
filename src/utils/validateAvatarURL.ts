const allowedURLAvatar = /(^https?:\/\/).+(\.jpg|\.jpeg|\.png)$/i;

export function validatiteAvatarURL(url: string): boolean {
  return !!allowedURLAvatar.exec(url);
}
