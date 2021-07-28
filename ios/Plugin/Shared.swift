//
//  Shared.swift
//  Plugin
//
//  Created by Marco on 28/07/2021.
//  Copyright © 2021 Max Lynch. All rights reserved.
//

import Foundation

public final class Shared {

    public static let store = Shared()
    private init() {
        self.data = [:]
        self.hasData = false
    }

    public var data: NSDictionary;
    public var hasData: Bool;
}
