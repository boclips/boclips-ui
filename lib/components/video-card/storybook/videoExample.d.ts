export declare const exampleVideo: {
    id: string;
    title: string;
    description: string;
    additionalDescription: undefined;
    releasedOn: Date;
    playback: {
        type: string;
        id: string;
        duration: string;
        referenceId: string;
        maxResolutionAvailable: boolean;
        links: {
            createPlaybackEvent: {
                href: string;
                templated: boolean;
            };
            createPlayerInteractedWithEvent: {
                href: string;
                templated: boolean;
            };
            download: {
                href: string;
                templated: boolean;
            };
            thumbnail: {
                href: string;
                templated: boolean;
            };
            setThumbnailBySecond: {
                href: string;
                templated: boolean;
            };
            setCustomThumbnail: {
                href: string;
                templated: boolean;
            };
            videoPreview: {
                href: string;
                templated: boolean;
            };
            hlsStream: {
                href: string;
                templated: boolean;
            };
        };
    };
    subjects: {
        id: string;
        name: string;
    }[];
    badges: string[];
    legalRestrictions: string;
    ageRange: {
        min: number;
        max: number;
        label: string;
    };
    rating: null;
    yourRating: null;
    bestFor: {
        id: number;
        label: string;
    }[];
    createdBy: string;
    promoted: null;
    language: null;
    attachments: never[];
    contentWarnings: {
        id: string;
        label: string;
    }[];
    channel: string;
    channelId: string;
    channelVideoId: string;
    types: {
        id: number;
        name: string;
    }[];
    captionStatus: null;
    isVoiced: null;
    taxonomy: {
        channel: {
            categories: {
                codeValue: string;
                description: string;
            }[];
        };
        manual: {
            categories: {
                codeValue: string;
                description: string;
            }[];
        };
    };
    educationLevels: {
        code: string;
        label: string;
    }[];
    links: {
        self: {
            href: string;
            templated: boolean;
        };
        logInteraction: {
            href: string;
            templated: boolean;
        };
        detailsProjection: {
            href: string;
            templated: boolean;
        };
        fullProjection: {
            href: string;
            templated: boolean;
        };
        assets: {
            href: string;
            templated: boolean;
        };
        rate: {
            href: string;
            templated: boolean;
        };
        update: {
            href: string;
            templated: boolean;
        };
        addAttachment: {
            href: string;
            templated: boolean;
        };
        tag: {
            href: string;
            templated: boolean;
        };
        transcript: {
            href: string;
            templated: boolean;
        };
    };
};
//# sourceMappingURL=videoExample.d.ts.map