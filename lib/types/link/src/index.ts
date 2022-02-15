import URI from "urijs";
import "urijs/src/URITemplate";
import { Link as ApiLink } from "boclips-api-client/dist/types";

/**
 * @deprecated Use `Link` type from `boclips-api-client` instead.
 */
export class Link {
  private link: RawLink;

  public constructor(link: RawLink) {
    this.link = link;
  }

  public getOriginalLink() {
    return this.link.href;
  }

  public get isTemplated(): boolean {
    return this.link.templated === true;
  }

  public getTemplatedLink(paramKeysValues: {
    [paramName: string]: any;
  }): string {
    if (URI.expand) {
      return URI.expand(this.link.href, paramKeysValues).toString();
    }
    return "";
  }
}

export interface RawLink {
  href: string;
  templated?: boolean;
}

export const convertToApiClientLink = (link?: Link): ApiLink | undefined =>
  link
    ? new ApiLink({ href: link.getOriginalLink(), templated: link.isTemplated })
    : undefined;

export const convertFromApiClientLink = (link?: ApiLink): Link | undefined =>
  link
    ? new Link({ href: link.getOriginalLink(), templated: link.isTemplated })
    : undefined;
