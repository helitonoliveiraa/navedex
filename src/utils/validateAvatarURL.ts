const allowedURLAvatar = /(^https?:\/\/)/i;

export function validatiteAvatarURL(url: string): boolean {
  return !!allowedURLAvatar.exec(url);
}
